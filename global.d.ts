// global.d.ts
interface Window {
    my_modal_2: {
      showModal: () => void;
      // Ajoute d'autres méthodes ou propriétés si nécessaire
    };
  }

  interface Window {
    my_modal_3: {
      showModal: () => void;
      // Ajoute d'autres méthodes ou propriétés si nécessaire
    };
  }
  
  
  declare module 'react-scroll-trigger' {
    interface ScrollTriggerProps {
      onEnter?: () => void;
      onExit?: () => void;
      // Ajoutez d'autres propriétés ici si nécessaire
    }
  
    class ReactScrollTrigger extends React.Component<ScrollTriggerProps> {}
  
    export default ReactScrollTrigger;
  }
  
  