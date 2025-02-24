import React, { Component } from 'react';
import {
    FormGroup,
    FormField,
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from "react-icons/fa";


const options = [
    { key: 'r', text: 'RES', value: 'วิจัย' },
    { key: 'a', text: 'ACA', value: 'วิชาการ' },
    { key: 'i', text: 'INV', value: 'รับเชิญ' },
];

const optionslanguage = [
    { key: 't', text: 'TH', value: 'ภาษาไทย' },
    { key: 'e', text: 'ENG', value: 'ภาษาอังกฤษ' },

];

class FormTem extends Component {
    state = {
        value: '', // เก็บค่า radio button ที่เลือก
        sub_date: new Date(), // เก็บวันที่ที่เลือก
    };

    // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงของ radio button
    handleChange = (e, { value }) => this.setState({ value });

    // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงของ DatePicker
    handleDateChange = (date) => {
        this.setState({ sub_date: date });
    };

    render() {
        const { value, sub_date } = this.state; // ดึงค่าจาก state
        return (
            <Form className='font-mono text-lg'>
                <FormGroup widths='equal' >
                    <FormField
                        control={Input}
                        label='รหัสบทความ'
                        placeholder='โปรดระบุรหัสบทความ'
                    />
                    
                    <FormField />
                    <FormField />
                </FormGroup>

                <FormGroup widths='equal' >
                    <FormField
                        control={Select}
                        label='ประเภทบทความ'
                        options={options}
                        placeholder='โปรดระบุประเภท'
                    />

                    {/* <FormField
                        control={Select}
                        label='ภาษาของบทความ'
                        options={optionslanguage}
                        placeholder='โปรดระบุภาษา'
                    /> */}

                    <FormField />
                    <FormField />
                </FormGroup>

                {/* <FormGroup inline>
                    <label >ภาษาของบทความ</label>
                    <FormField
                        control={Radio}
                        label='TH'
                        value='1'
                        checked={value === '1'}
                        onChange={this.handleChange}
                    />
                    <FormField
                        control={Radio}
                        label='ENG'
                        value='2'
                        checked={value === '2'}
                        onChange={this.handleChange}
                    />
                </FormGroup> */}

                <p className='font-bold'>ภาษาของบทความ</p>
                <FormField
                    control={Radio}
                    label='TH'
                    value='1'
                    checked={value === '1'}
                    onChange={this.handleChange}
                />
                <FormField
                    control={Radio}
                    label='ENG'
                    value='2'
                    checked={value === '2'}
                    onChange={this.handleChange}
                />

                <FormGroup widths='equal' >
                    <FormField className=''
                        control={TextArea}
                        label='ชื่อบทความภาษาไทย'
                        placeholder='โปรดระบุชื่อบทความที่เป็นภาษาไทย'
                    />

                    <FormField className=''
                        control={TextArea}
                        label='ชื่อบทความภาษาอังกฤษ'
                        placeholder='โปรดระบุชื่อบทความที่เป็นภาษาอังกฤษ'
                    />

                </FormGroup>


                <Form.Field>
                    <label>Submission Date:</label>
                    <DatePicker
                        placeholderText='โปรดระบุวันที่ส่ง'
                        selected={sub_date} // กำหนดค่าเริ่มต้นเป็นวันที่จาก state
                        onChange={this.handleDateChange} // กำหนดฟังก์ชันที่เรียกเมื่อวันที่เปลี่ยนแปลง
                        dateFormat="yyyy-MM-dd"
                        required
                        className='p-5'
                    />
                </Form.Field>

                {/* <FormField
                    control={Checkbox}
                    label='I agree to the Terms and Conditions'
                /> */}

                {/* <FormField control={Button}>Submit</FormField> */}
                <FormField control={Button} color='blue'>ยืนยัน</FormField>
            </Form>
        );
    }
}

export default FormTem;
