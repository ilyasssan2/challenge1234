import React, { useMemo, useState } from 'react';
import { IMatch } from '../../interfaces/IMatch';
import { groupMatchesByCompetition } from '../../utils/groupMatchesByCompetition';
import FollowModal from '../modals/FollowModal';
import Competition from './Competition';

interface props {
    matches: IMatch[];
}
const Competitions = ({ matches }: props) => {
    const [dataToFollowModal, setDataToFollowModal] = useState<IMatch | null>(null);

    const handleFollowModal = (match: IMatch | null) => setDataToFollowModal(match);
    // this line could expensive to compute so its better if we memorize it
    const groupedMatches = useMemo(() => groupMatchesByCompetition(matches), [matches]);

    return (
        <>
            {dataToFollowModal && (
                <FollowModal
                    contestant1={dataToFollowModal.contestant[0]}
                    contestant2={dataToFollowModal.contestant[1]}
                    onClose={handleFollowModal.bind(this, null)}
                />
            )}
            {Object.keys(groupedMatches)
                //@ts-ignore
                .sort((a, b) => a > b)
                //@ts-ignore
                .map((key: number) => (
                    <Competition Competition={groupedMatches[key]} onClick={handleFollowModal} key={groupedMatches[key].id} />
                ))}
        </>
    );
};
export default React.memo(Competitions);
