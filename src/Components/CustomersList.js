import React, { Component } from 'react'
import Customer from './Customer'
import {connect} from 'react-redux'
import {getCustomers} from '../Ducks/reducer'



class CustomersList extends Component {
    componentDidMount(){
        this.props.getCustomers()
      }

    updateCustomer = (customers) => {
        console.log(customers)
        return customers
    }

    render(){
        console.log('this.props', this.props)
        let customerList = this.props.customerList.map(customer => {
            return <Customer
                     key={customer.id}
                     customer={customer}
                     updateCustomer={this.updateCustomer}/>
                     console.log(customer)
        })
        return(
            <div className= "dashboard">
                <img src="https://static.wixstatic.com/media/693150_f8abf0d27b5e4e4d9d4431dfb46483f0~mv2_d_1500_1308_s_2.png/v1/fill/w_474,h_414,al_c,q_80,usm_0.66_1.00_0.01/693150_f8abf0d27b5e4e4d9d4431dfb46483f0~mv2_d_1500_1308_s_2.webp" className="App-logo-main" alt="logo"/> 
                <h3 className= "dashTitle">Customers</h3>
                {customerList}
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
      customerList: state.customer
    }
  }

export default connect(mapStateToProps, {getCustomers})(CustomersList);