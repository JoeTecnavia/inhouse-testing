module.exports = {
    url : '[url]',
        elements: {
        currentDate: {
            //selector: '//*[@id="titles"]/div[3]'
            selector: '#pullDownDate > option:nth-child(1)'
          },
          acceptButton: {
            selector: '#dlg_btn_ok'
          }
    },

    commands: [{
        getCurrDay: function(){
            return this.elements.currentDate.selector;
        },

        formatMonth: function(number){
            let result = number+1;
            if(result<10){
                result = "0"+result;
            }
            return result;
        }
    }]
};
