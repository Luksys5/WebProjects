import React, { useContext, useEffect } from 'react';
import { IconSprite } from './IconSprite';
import { useMutation } from '@apollo/react-hooks';
import { LIKE_GAME } from '../../graphqlApi/mutations/LikeGameQuery';
import { StorageContext } from '../../storage/StorageContext';
import { Loader } from './Loader';
import { toast } from 'react-toastify';
import { Like } from '../../graphqlApi/types/Like';
import { LikeMutation } from '../../graphqlApi/types/Queries';
import { ToastProps } from '../../GlobalData';
type LikeComponentProps = Like; 

export const LikeGame: React.FC<LikeComponentProps> = ({ targetId, type, count }) => {
    const [likeGame, { loading, error, data }] = useMutation<LikeMutation>(LIKE_GAME);
    const { userId, setLoginActive, likedGames, setLikedGames } = useContext(StorageContext);

    useEffect(
        () => {
            if (data && data.likeGame === null) {
                toast.info(
                    "You've already liked the game! Thanks!",
                    ToastProps 
                );
            } else if (data?.likeGame) {
                setLikedGames(likedGames.concat(targetId));
            }
        },
        [data]
    )

    useEffect(
        () => {
            if (error) {
                toast.error(
                    "Couldn't like the game, try refresh or later",
                   ToastProps 
                );
            }
        },
        [error]
    );

    const likeGameHandler = () => {
        if (loading || likedGames.some(id => id === targetId)) {
            return;
        }

        if (!userId) {
            setLoginActive(true);
            return;
        }

        likeGame({
            variables: {
                userId,
                targetId,
                type
            }
        })
    }

    return ( 
        <div className="a-like-component">
            {
                <IconSprite
                    name="love"
                    className={
                        loading ?
                            'a-icon--loading' :
                            likedGames.some(id => id === targetId) ?
                                'a-icon--selected' :
                                ''
                    }
                    onClick={likeGameHandler} />
            }
            <span className="a-like-component__count">
            {
                loading ?
                    <Loader size="small" /> :
                    (data && data.likeGame ? data.likeGame.count : count)
            }
            </span>
        </div>
    );
}
