import { useState } from 'react';
import { Alert, Button, CircularProgress, Stack } from '@mui/material';
import axios from 'axios';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import useDidMountEffect from '../hooks/useDidMount';
import Layout from '../components/Layout';
import DateSwitcher from '../components/Ui/DateSwitcher';
import { dateCalendar } from '../config/dateCalendarFormat';
import { IMatch } from '../interfaces/IMatch';
import { matchesUrlBuilder } from '../utils/matchesUrlBuilder';
import Competitions from '../components/Ui/Competitions';

dayjs.extend(calendar);

interface props {
    matches: IMatch[];
    currentPage: number;
    isThereIsMore: boolean;
}

const Matches: NextPage<props> = ({ matches, isThereIsMore, currentPage }) => {
    const { push, pathname, query } = useRouter();

    const [filteredMatches, setFilteredMatches] = useState(matches);
    const [reqState, setReqState] = useState({ loading: false, error: '' });

    const [selectedDate, setSelectedDate] = useState(dayjs(query.date as string).isValid() ? dayjs(query.date as string) : dayjs());
    const [search, setSearch] = useState((query.search as string) || '');
    const [isOnlyLiveMatches, setIsOnlyLiveMatches] = useState(query.isOnlyLiveMatches === 'true' ? true : false);

    const [paginationInfo, setPaginationInfo] = useState({ isThereIsMore, currentPage });

    const handleIsOnlyLiveMatches = () => setIsOnlyLiveMatches((prevState) => !prevState);

    const prevDay = () => setSelectedDate((prevState) => dayjs(prevState).subtract(1, 'd'));
    const nextDay = () => setSelectedDate((prevState) => dayjs(prevState).add(1, 'd'));

    const getFilteredMatches = async (
        date = new Date(),
        search = '',
        isOnlyLiveMatches = false,
        page: number = 1,
        initialMatches: IMatch[] = []
    ) => {
        try {
            setReqState({ loading: true, error: '' });
            const { data, headers } = await axios.get<IMatch[]>(matchesUrlBuilder(date, search, isOnlyLiveMatches, page));
            const isThereIsMore = !!(headers.link as string).match(/next/g);
            setPaginationInfo(() => ({ currentPage: page, isThereIsMore }));
            setFilteredMatches(() => [...initialMatches, ...data]);
            setReqState({ loading: false, error: '' });
            push(`${pathname}?date=${date.toLocaleDateString()}&isOnlyLiveMatches=${isOnlyLiveMatches}&search=${search}`, undefined, {
                shallow: true,
            });
        } catch (error: any) {
            setReqState({ loading: false, error: error.message });
        }
    };

    const handlePagination = () => {
        const nextPage = paginationInfo.currentPage + 1;
        getFilteredMatches(selectedDate.toDate(), search, isOnlyLiveMatches, nextPage, filteredMatches);
    };

    useDidMountEffect(() => {
        const timer = setTimeout(() => {
            getFilteredMatches(selectedDate.toDate(), search, isOnlyLiveMatches);
        }, 700);
        return () => clearTimeout(timer);
    }, [search]);

    useDidMountEffect(() => {
        getFilteredMatches(selectedDate.toDate(), search, isOnlyLiveMatches);
    }, [selectedDate, isOnlyLiveMatches]);

    return (
        <Layout onChange={setSearch} search={search} onClickOnLiveButton={handleIsOnlyLiveMatches} isLiveActive={isOnlyLiveMatches}>
            <DateSwitcher onDecrease={prevDay} onIncrease={nextDay} date={dayjs(selectedDate).calendar(undefined, dateCalendar)} />
            {reqState.error && <Alert severity="error">{reqState.error}</Alert>}
            {reqState.loading ? (
                <Stack flexDirection="row" justifyContent="center" marginTop={20}>
                    <CircularProgress color="secondary" />
                </Stack>
            ) : (
                <Competitions matches={filteredMatches} />
            )}
            {paginationInfo.isThereIsMore && (
                <Stack justifyContent="center">
                    <Button color="primary" onClick={handlePagination}>
                        More
                    </Button>
                </Stack>
            )}
        </Layout>
    );
};

export default Matches;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    try {
        const date = query?.date ? dayjs(query?.date as string).toDate() : dayjs().toDate();
        const search = (query?.search ? query?.search : '') as string;
        const isOnlyLiveMatches = query?.isOnlyLiveMatches === 'true' ? true : false;

        const { data, headers } = await axios.get<IMatch[]>(matchesUrlBuilder(date, search, isOnlyLiveMatches));
        //if we found next that means that there is a next page that can we call
        const isThereIsMore = !!(headers.link as string).match(/next/g);
        return {
            props: {
                matches: data,
                currentPage: 1,
                isThereIsMore,
            },
        };
    } catch (error) {
        return {
            redirect: {
                destination: '/500',
                permanent: false,
            },
        };
    }
};
