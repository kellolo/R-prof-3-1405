import React from 'react';
import Close from 'material-ui/svg-icons/navigation/close';
import './styles.css';


class Index extends React.Component {
   state = {
       isShown: false,
   };

   componentDidMount() {
       // Определяем, является ли устройство iPhone-ом
       const isIos = () => {
           const userAgent = window.navigator.userAgent.toLowerCase();
           return /iphone/.test( userAgent );
       };
       // Определяем, запущено ли приложение отдельно
       const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

       // Решаем, показать или не показать уведомление об установке:
       if (isIos() && !isInStandaloneMode()) {
           this.handleShow();
       }
   }

   handleShow = () => {
       this.setState({ isShown: true });
   };

   handleHide = () => {
       this.setState({ isShown: false });
   };

   render() {
       return (
           <div style={ { display: this.state.isShown ? 'block' : 'none' } } className="speech-bubble-container">
               <div className="speech-bubble">
                   <Close className="close-install-message-icon" onClick={ this.handleHide } />
                   <div style={ { paddingRight: '15px' } }>Установи приложение на свой iPhone: нажми «Поделиться», а затем на экран «Домой»</div>
               </div>
           </div>
       );
   }
}

export default Index;
