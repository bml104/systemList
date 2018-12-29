const media = [
    {
      title: 'EHRDB-P1', 
      description: "EHR Database Server 1.",
      type: 'Clincal App',
      contributor: '',
      showDetail: false,

    },
    {
      title: 'EHRDB-P2', 
      description: "EHR Database Server 1.",
      type: 'Clincal App',
      contributor: 'Dennis',
      showDetail: false,
    },
    {
      title: 'EHRDB-P3', 
      description: "EHR Database Server 1.",
      type: 'Clincal App',
      contributor: '',
      showDetail: false,
    },
    {
      title: 'FINDB-P4', 
      description: "EHR Database Server 1.",
      type: 'Finance App',
      contributor: 'Dennis',
      showDetail: false,
    },
    {
      title: 'HRDB-P5', 
      description: "EHR Database Server 1.",
      type: 'HR App',
      contributor: 'Dennis',
      showDetail: false,
    },
    {
      title: 'EHRDB-P6', 
      description: "EHR Database Server 1.",
      type: 'Clincal App',
      contributor: 'Dennis',
      showDetail: false,
    },
    {
      title: 'HRDB-P7', 
      description: "EHR Database Server 1.",
      type: 'HR App',
      contributor: 'Dennis',
      showDetail: false,
    }
  ]

const app = new Vue({
    el: '#media-list',
    data: {
      title: 'Local Systems List',
      mediaList: media,
      type: '',
      contributor: ''
    },
    methods: {
      toggleDetails: function(media){
        media.showDetail = !media.showDetail
      },
      filterList: function(){
        this.type = event.target.value;
        console.log(this.type);
      },
      filterContributor: function(){
        this.contributor = event.target.value;
        console.log(this.contributor);
      }

    },
    computed: {
      uniqueItemList: function(){
        const types = [];
        this.mediaList.forEach((item)=>{
          if(!types.includes(item.type)){
            types.push(item.type);
          }
        });
        return types;
      }
    }
    
  });