import React from "react"
import AddPerson from "../Persons/AddPerson"
import AddEmployee from "../Persons/AddEmployee"
import AddBusiness from "../Business/AddBusiness"
import AddBooking from "../Booking/AddBooking"
import {shallow, mount} from "enzyme"
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import '../../App.css';

Enzyme.configure({ adapter: new Adapter() });

describe("<AddPerson /> component Unit Test", () => {
    const props = {
        name: "Joe",
        desc: "customer",
        personIdentifier: "123",
        start_date: "20/09/2020",
        end_date: "25/12/2020"
    };
    it("should create one new person state", () => {
        const component = shallow(<AddPerson {...props} />);
        expect(component).toHaveLength(1);
    });
})

describe("<AddEmployee /> component Unit Test", () => {
    const mockFn = jest.fn();
    const props = {
        employee_name: "Lenny",
        employee_desc: "pizzaMaker",
        employee_identifier: "789",
        employee_start_date: "19/09/2020",
        employee_end_date: "14/02/2021"
    };
    it("should create one new employee state", () => {
        const component = shallow(<AddEmployee {...props} />);
        expect(component).toHaveLength(1);
    });
})

describe("<AddBusiness /> component Unit Test", () => {
    const props = {
        business_name: "Joe's Pizza",
        business_identifier: "b654",
        business_desc: "pizzeria",
        business_start_date: "04/07/2020",
        business_end_date: "10/03/2021"
    };
    
    it("should create one new business state", () => {
        const component = shallow(<AddBusiness {...props} />);
        expect(component).toHaveLength(1);
    });
})

describe("<AddBooking /> component Unit Test", () => {
    const props = {
        booking_id: "3E57A",
        business_id: "b654",
        booking_date: "22/09/2020"
    };
    it("should create one new booking state", () => {
        const component = shallow(<AddBooking {...props} />);
        expect(component).toHaveLength(1);
    });
})