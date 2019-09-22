import React from 'react'


const Home = () => {
    return ( 
        <div className="container-fluid">
            <h4 className="text-danger">Home</h4>

            <section className="jumbotron jumbotron-fluid d-flex justify-content-end">
                <div className="container w-50 d-flex justify-content-start m-0 bg-dark">
                <h2 className="text-light text-uppercase">We love <span className="text-warning">runing</span></h2>
                </div>
            </section>

        </div>
     );
}
 
export default Home;