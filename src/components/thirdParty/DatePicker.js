import React from 'react';
import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import datepickerENFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-en-GB';
datepickerFactory($);
datepickerENFactory($);

export default class DatePicker extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidMount(){
        this.$el = $(this.el);
        console.log(this.el);
        this.$el.datepicker();
        $.datepicker.setDefaults($.datepicker.regional['en-GB']);
    }
    componentWillUnmount(){
        this.$el.datepicker('destroy');
    } 
    render()
    {
        return(
            <div>
                <input type="text"
                       ref={el => this.el = el}/>
            </div>
        )
    }
}