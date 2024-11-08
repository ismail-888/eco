import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Referral from '../pages/Referral'
import Bundles from '../pages/Bundles'
import WhyUs from '../pages/WhyUs'


const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/referral",
                element:<Referral/>
            },
            {
                path:"/bundles",
                element:<Bundles/>
            },
            {
                path:"/whyus",
                element:<WhyUs/>
            },
            {
                path:"/aboutus",
                element:<WhyUs/>
            },
            {
                path:"/warranty",
                element:<Referral/>
            },
            {
                path:"/reviews",
                element:<WhyUs/>
            },
        ]
    }
])

export default router