import AuthLogo from './extensions/Vector.png';
import MenuLogo from './extensions/logo.jpg';
import favicon from './extensions/logo.jpg';


export default {
    config: {
      auth: {
        logo: AuthLogo,
      },
      menu: {
        logo: MenuLogo,
      },
      head: {
        favicon: favicon,
      },
      translations: {
        en: {
          'app.components.LeftMenu.navbrand.title': 'The Ark Dashboard',
          'app.components.LeftMenu.navbrand.workplace': 'The Ark Workplace',
          "Auth.form.welcome.title": "Welcome to The Ark",
          "Auth.form.welcome.subtitle": "Log in to The Ark Development",
        },
      },
    },
    bootstrap() {},
  };
