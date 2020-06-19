import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { ApolloError } from 'apollo-boost';
import { ToastProps } from '../../GlobalData';

type GraphErrorProps = {
    error: ApolloError;
    message: string;
    hide?: boolean;
}

export const GraphError: React.FC<GraphErrorProps> = ({ error, message, hide }) => {
    useEffect(
        () => {
            toast.error(
                error.message,
                ToastProps
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