import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { ApolloError } from 'apollo-boost';

type GraphErrorProps = {
    error: ApolloError;
    message: string;
    hide?: boolean;
}

export const GraphError: React.FC<GraphErrorProps> = ({ error, message, hide }) => {
    useEffect(
        () => {
            toast.error(
                error.message, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            );
        },
        []
    );

    return (
        <div className="a-graph-error">
            <span>{ hide ? '' : message }</span>
        </div>
    )
}