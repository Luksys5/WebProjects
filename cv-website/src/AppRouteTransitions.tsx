import React from 'react';
import { RouteComponentProps, Route, withRouter, Switch } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { HomePage } from './components/pages/HomePage';
import Card from './components/molecules/Card';
import { AboutPage } from './components/pages/AboutPage';
import { ExperiencePage } from './components/pages/ExperiencePage';
import { GamesPage } from './components/pages/GamesPage';

type AppRouteTransitionsProps = RouteComponentProps;

const AppRouteTransitions: React.FC<AppRouteTransitionsProps> = ({ location }) => {
    return (
        <TransitionGroup>
            <CSSTransition 
                key={location.pathname}
                classNames="slide-down"
                timeout={{enter: 1000, exit: 1000}}
            >
                <Switch location={location}>
                    <Route path='/' component={HomePage} exact />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/experience' component={ExperiencePage} />
                    <Route path='/games' component={GamesPage} />
                    </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default withRouter(AppRouteTransitions);