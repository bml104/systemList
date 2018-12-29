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
      title: 'EHRDB-P4', 
      description: "EHR Database Server 1.",
      type: 'Finance App',
      contributor: 'Dennis',
      showDetail: false,
    },
    {
      title: 'EHRDB-P5', 
      description: "EHR Database Server 1.",
      type: 'HR App',
      contributor: 'Dennis',
      showDetail: false,
    },
    {
      title: 'EHRDB-P6', 
      description: "EHR Database Server 1.",
      type: 'EHR Clincal App',
      contributor: 'Dennis',
      showDetail: false,
    },
    {
      title: 'PEHRDB-P7', 
      description: "EHR Database Server 1.",
      type: 'EHR Clincal App',
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

    }
    
  });