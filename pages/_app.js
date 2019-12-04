import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import {createStore} from '../src/store/store';

export default withRedux(createStore, {debug: true})(
    class MyApp extends App {
      static async getInitialProps({Component, ctx}) {
        return {
          pageProps: {
            ...(Component.getInitialProps ?
            await Component.getInitialProps(ctx) :
            {}),
          },
        };
      }

      render() {
        const {Component, pageProps, store} = this.props;
        return (
          <Container>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </Container>
        );
      }
    },
);
