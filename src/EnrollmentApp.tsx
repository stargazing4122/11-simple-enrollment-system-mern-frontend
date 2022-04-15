import { Provider } from 'react-redux';
import { AppRouter } from './routers';
import { store } from './state/store/store';

export const EnrollmentApp = () => {
  return (
    <>
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    </>
  )
}
