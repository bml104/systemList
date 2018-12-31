const server = [
    {
      serverName: 'WEB-P1', 
      description: "Web Server 1.",
      type: 'Web App',
      sysAdmin: '',
      vulList: ["vul1", "vul2", "vul3"],
      showDetail: false,

    },
    {
      serverName: 'EHRDB-P2', 
      description: "EHR Database Server 1.",
      type: 'Clincal App',
      sysAdmin: 'Dennis',
      showDetail: false,
    },
    {
      serverName: 'EHRDB-P3', 
      description: "EHR Database Server 1.",
      type: 'Clincal App',
      sysAdmin: '',
      showDetail: false,
    },
    {
      serverName: 'FINDB-P4', 
      description: "EHR Database Server 1.",
      type: 'Finance App',
      sysAdmin: 'Dennis',
      showDetail: false,
    },
    {
      serverName: 'HRDB-P5', 
      description: "EHR Database Server 1.",
      type: 'HR App',
      sysAdmin: 'Dennis',
      showDetail: false,
    },
    {
      serverName: 'EHRDB-P6', 
      description: "EHR Database Server 1.",
      type: 'Clincal App',
      sysAdmin: 'Dennis',
      showDetail: false,
    },
    {
      serverName: 'HRDB-P7', 
      description: "EHR Database Server 1.",
      type: 'HR App',
      sysAdmin: 'Dennis',
      showDetail: false,
    }
  ]

const app = new Vue({
    el: '#server-list',
    data: {
      serverName: 'Local Systems List',
      serverList: server,
      vulList: '',
      type: '',
      sysAdmin: ''
    },
    methods: {
      toggleDetails: function(server){
        server.showDetail = !server.showDetail
      },
      filterList: function(){
        this.type = event.target.value;
        console.log(this.type);
      },
      filtersysAdmin: function(){
        this.sysAdmin = event.target.value;
        console.log(this.sysAdmin);
      }

    },
    computed: {
      uniqueItemList: function(){
        const types = [];
        this.serverList.forEach((item)=>{
          if(!types.includes(item.type)){
            types.push(item.type);
          }
        });
        return types;
      }
    }
    
  });