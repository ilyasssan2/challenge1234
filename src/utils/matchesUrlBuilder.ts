import dayjs from 'dayjs';
import { matchStatusEnum } from '../enums/matchStatusEnum';

export const matchesUrlBuilder = (date: Date, search: string, isOnlyLiveMatches: boolean, page = 1, limit = 2): string => {
    const base = `${process.env.BACKEND_URL}matches?date=${dayjs(date).format('DD/MM/YYYY')}`;
    const onlyLives = isOnlyLiveMatches ? `&match_details.match_status=${matchStatusEnum.Playing}` : '';
    const withSearch = search ? `&q=${search}` : '';

    return base + `${withSearch}${onlyLives}&_sort=time&_page=${page}&_limit=${limit}`;
};
