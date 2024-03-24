const workers = [
    {title:"Chief Baker",  url:"https://picsum.photos/id/646/320/320"},
    {title:"Queen Baker", url:"https://picsum.photos/id/821/320/320"},
    {title:"Prince Baker", url:"https://picsum.photos/id/996/320/320"},
  ];

const phones = [
    {phone:"+1 234 567 890", url:"tel:+1234567890"},
    {phone:"+1 234 567 890", url:"tel:+1234567890"},
];

const itemsp = [
    {item:"Home"},
    {item:"Products"},
    {item:"About us"},
    {item:"Contacto"},
];


const handlerBarsContext = {
    "/index.html": {
        "todo": "Add some variables here for the partials"
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page], workers,phones, itemsp}
    return context;
}
export default pageContext;