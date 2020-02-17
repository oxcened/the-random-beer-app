import React from 'react';
import { render } from '@testing-library/react';
import RandomizeBeer from './containers/RandomizeBeer/RandomizeBeer';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';
import mockBeer from './mockBeer.json';
import { getBeer } from './store/actions';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('renders beer name from random API beer', async () => {
  const mockStore = configureStore({
    currentBeer: null,
    currentBrewery: null,
    isLoading: false
  });
  mockedAxios.get.mockResolvedValue({data: mockBeer});
  await mockStore.dispatch(getBeer());
  const {getByTestId} = render(
    <Provider store={mockStore}>
      <RandomizeBeer/>
    </Provider>
  );

  const nameElement = getByTestId('name');
  expect(nameElement).toBeInTheDocument();
  expect(nameElement).toHaveTextContent(mockBeer.data.name);
});