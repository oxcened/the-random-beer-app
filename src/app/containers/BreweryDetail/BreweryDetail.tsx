import React, {Dispatch} from 'react';
import {Button} from 'reactstrap';
import Image from '../../components/Image/Image';
import AppHistory from '../../models/AppHistory';
import {AppRoute} from '../../models/AppRoute';
import Field from '../../components/Field/Field';
import {connect} from 'react-redux';
import {RootState} from '../../store/reducer';
import {cleanBreweryDetail, getBrewery} from '../../store/actions';
import {Brewery} from '../../models/Brewery';
import {RouteComponentProps} from 'react-router';

interface RouteProps {
    id?: string;
}

interface BreweryDetailProps extends RouteComponentProps<RouteProps> {
    getBrewery: (id: string) => void;
    cleanComponent: () => void;
    currentBrewery: Brewery;
}

class BreweryDetail extends React.Component<BreweryDetailProps> {
    componentDidMount(): void {
        const {getBrewery, match: {params: {id}}} = this.props;
        getBrewery(id);
    }

    componentWillUnmount(): void {
        this.props.cleanComponent();
    }

    render() {
        const {currentBrewery} = this.props;
        return <>
            <Button color='warning m-3' onClick={() => AppHistory.push(AppRoute.RANDOMIZE_BEER)}>Back</Button>
            {currentBrewery && <div className='row'>
                <div className='col-sm-6'>
                    <Image className='img-fluid d-block m-auto' src={currentBrewery.images?.squareMedium || ''} alt='Beer label'/>
                </div>
                <div className='col-sm-6 p-3 mx-3 mx-sm-0'>
                    <Field label='Brewery name' value={currentBrewery.name || 'This brewery has no name'}/>
                    <Field label='Brewery description' value={currentBrewery.description || 'This brewery has no description'}/>
                    <Field label='Start year' value={currentBrewery.established || 'This brewery has no start year'}/>
                </div>
            </div>}
        </>;
    }
}

export default connect(
    (state: RootState) => ({
        currentBrewery: state.currentBrewery
    }),
    (dispatch: Dispatch<any>) => ({
        getBrewery: (id: string) => dispatch(getBrewery({id})),
        cleanComponent: () => dispatch(cleanBreweryDetail())
    })
)(BreweryDetail)
