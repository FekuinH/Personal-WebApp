//Layout
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

//Admin pages
import AdminHome from '../pages/Admin';
import AdmingSignIn from '../pages/Admin/SignIn';

//Basic pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';

// Other
import Error404 from '../pages/Error404';

const routes = [
    
    //rutas para administrador logeado
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: '/admin/login',
                component: AdmingSignIn,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },

    //rutas para usuario sin logear
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]


export default routes;