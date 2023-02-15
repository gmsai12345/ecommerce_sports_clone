import React from 'react'
import Layout from "./../components/layout"
function shippingaddress() {
  return (
    <div>
        <Layout>
            <label>
                FullName:
                <input type="text"></input>
            </label>
            <label>
                Adress:
                <input type="text"></input>
            </label>
            <label>
                City:
                <input type="text"></input>
            </label>
            <label>
                Postal Code:
                <input type="text"></input>
            </label>
            <label>
                Country:
                <input type="text"></input>
            </label>
            <label>confirm delivery</label>
            <button type="submit"/>
        </Layout>

    </div>
  )
}

export default shippingaddress