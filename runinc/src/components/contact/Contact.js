import React from 'react'


const Contact = () => {
    return ( 
        <div className="container-fluid padding">
         <section className="row padding m-lg-auto ">

             <div className="col-lg-6 bg-primary">
                 <section className="row">

                     <div className="col-12 jumbuotron jumbotron-fluid align-items-center">
                         <div className="container w-75 d-flex justify-content-lg-end m-0 bg-warning">
                             <h2 className="text-light text-uppercase">Contact</h2>
                         </div>
                     </div>

                     <div className="col-12 text-light text-center mt-5 bg-dark">
                           <h3 className="m-0">Runinc</h3>
                           <p className="m-0">Kannikegade 12</p>
                           <p className="m-0">8000 Århus C</p>
                           <p className="m-0">Telefon 26 13 26 96</p>
                           <p className="m-0">info@runinc.dk</p>
                     </div>

                 </section>
             </div>

             <div className="col-lg-6 bg-danger">
                 <form name="contactForm" method="get" action={"/home"}>
                  <input type="text" namr="firstname" placeholder="Jonas"/>
                 </form>
             </div>

         </section>
        </div>
     );
}
 
export default Contact;