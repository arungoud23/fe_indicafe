import React from 'react';
import Layout from "../Layout/Layout";
import Slideshow from '../UI/Slideshow/Slideshow';


const Catalog = () => {
  
    const renderCatalog = () => (
        <Layout title="Savor Our Delicacies" >
      {/* {showNotification()} */}
      {/* {loading ? <AppSpinner /> : */}
        <section className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-8 col-12">
              <Slideshow />
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-lg-2 mt-2">
                <h4>Filter By Category</h4>
                {/* <CheckboxGroup categories={categories} handleFiltering={getFilteredDishes} /> */}
              </div>
              <div className="col-lg-10 mt-2">
                <div className="row justify-content-center">

                  {/* {displayDishes()}
                  {displayFilteredDishes()} */}

                </div>
              </div>

            </div>


          </div>

        </section>
      {/* } */}
    </Layout>
    )
  return (
    <>
    {renderCatalog()}
    </>
  )
}

export default Catalog