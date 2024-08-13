import {Hero,PopularProducts,SuperQuality,Services,SpecialOffers,CustomerReviews,Subscribe,Footer} from "./sectios/index"
import Nav from "./componants/Navbar"

const App = () =>(  //if we do not have any function we can directlly use () for returning the componants
  <main className="relative">
<Nav/>
<section className="xl:padding-1 wide:padding-r padding-b">
 <Hero/>
</section>
<section className="padding">
<PopularProducts/>
</section>
<section className="padding">
<SuperQuality/>
</section>
<section className="padding-x py-10">
<Services/> 
</section>
<section className="padding">
<SpecialOffers/>
</section>
<section className="bg-pale-blue padding">
<CustomerReviews/>
</section>
<section className="padding-x sm:py-32 py-16 w-full" >
<Subscribe/>
</section>
<section className="bg-black padding-x pb-8">
<Footer/>
</section>

  </main>
);
export default App;