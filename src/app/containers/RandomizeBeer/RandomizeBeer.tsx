import React, {Dispatch} from 'react';
import Image from '../../components/Image/Image';
import {Button} from 'reactstrap';
import AppHistory from '../../models/AppHistory';
import {AppRoute} from '../../models/AppRoute';
import Field from '../../components/Field/Field';
import {connect} from 'react-redux';
import {RootState} from '../../store/reducer';
import {getBeer} from '../../store/actions';
import {Beer} from '../../models/Beer';
import {BeerSample} from "../../../assets/images/Images";

interface RandomizeBeerProps {
    getBeer: () => void;
    currentBeer: Beer;
}

class RandomizeBeer extends React.Component<RandomizeBeerProps> {
    componentDidMount(): void {
        if (!this.props.currentBeer) this.props.getBeer();
    }

    onBreweryClick = () => {
        AppHistory.push(AppRoute.BREWERY_DETAIL.replace(':id', this.props.currentBeer.brewery.id));
    };

    render() {
        const {getBeer, currentBeer} = this.props;

        return <>
            <div className='d-flex flex-column'>
                <Button color='warning m-3' className='align-self-center' onClick={getBeer}>Show Another Beer</Button>
            </div>
            {currentBeer && <div className='row'>
                <div className='col-sm-6'>
                    <Image className='img-fluid d-block m-auto' src={BeerSample} alt='Beer label'/>
                </div>
                <div className='col-sm-6 p-3 mx-3 mx-sm-0'>
                    <Field label='Beer name' value={currentBeer.name || 'This beer has no name'} valueTestId={'name'}/>
                    <Field label='Beer description' value={currentBeer.description || 'This beer has no description'}/>
                    {currentBeer.brewery && <Field label='Brewery' value={currentBeer.brewery.name || 'This brewery has no name'} onClick={this.onBreweryClick}/>}
                </div>
            </div>}
        </>;
    }
}

export default connect(
    (state: RootState) => ({
        currentBeer: state.currentBeer
    }),
    (dispatch: Dispatch<any>) => ({
        getBeer: () => dispatch(getBeer())
    })
)(RandomizeBeer)
