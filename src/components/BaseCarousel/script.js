import {Hooper, Slide} from 'hooper'
import 'hooper/dist/hooper.css';

export default {
name: 'BaseCarosel',
  components: {
    Hooper,
    Slide
  },
  data(){
    return {
      hooperSettings:{
        itemsToShow: 2,
        vertical: false
      },
      data:[
        {name: 'leandro'},
        {name: 'leonardo'},
        {name: 'felipe'},
        {name: 'joão'},
        {name: 'gabriel'},
        {name: 'maria'},
        {name: 'neuza'},
      ],
    }
  }
};