import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Referral from '../pages/Referral'
import Bundles from '../pages/Bundles'
import WhyUs from '../pages/WhyUs'
import AboutUs from '../pages/AboutUs'
import BundleDetails from '../pages/BundleDetails'
import DetailsBackSkin from '../pages/DetailsBackSkin'
import Reviews from '../pages/Reviews'
import PlaceOrder from '../pages/PlaceOrder'
import DetailsMachines from '../pages/DetailsMachines'
import Video from '../pages/Video'


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
                path:"/videos",
                element:<Video/>
            },
            {
                path:"/backskinsDetails/:id",
                element:<DetailsBackSkin/>
            },
            {
                path:"/detailsmachine/:id",
                element:<DetailsMachines/>
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
                path:"/bundleDetails/:id",
                element:<BundleDetails/>
            },
            {
                path:"/whyus",
                element:<WhyUs/>
            },
            {
                path:"/aboutus",
                element:<AboutUs/>
            },
            {
                path:"/warranty",
                element:<Referral/>
            },
            {
                path:"/reviews",
                element:<Reviews/>
            },
            {
                path:"/place-order",
                element:<PlaceOrder />
            },
        ]
    }
])

export default router