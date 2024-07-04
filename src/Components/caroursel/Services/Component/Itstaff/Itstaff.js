import React from 'react'
import styles from './Itstaff.module.css'
import Card from './Cards/Card'
const Itstaff = () => {
    const data = [
        {
          logo:'/Images/Itstaff_recurit.png',
          alter:"recurit",
          title:'Boosts the recruitment cycle',
          desc:`Enlistment is a tedious and lengthy process, especially when you're searching for specific and uncommon expertise. Bytebillion IT staff team augmentation services provide access to an extensive and experienced pool of tech talent, and project managers, saving you the hassle of direct hiring, background checks, and payroll processes.`
        },
        {
          logo:'/Images/Itstaff_cost.png',
          alter:"cost",  
          title:'Lower development cost',
          desc:`The biggest benefit of building remote dedicated teams is that business leaders no longer have to bear the expenses of hiring internal development teams, software development costs, and all the assorted expenses that go with it including taxes, equipment costs, or employee benefits for complete development.`
        },
        {
          logo:'/Images/Itstaff_legal.png',
          alter:"legal",
          title:'Less legal hassles ',
          desc:`Avoid the headache of mounds of paperwork and legal responsibilities including payroll, taxes, benefits, etc. When you leverage our IT staff augmentation services, we manage and are responsible for all legal responsibilities and paperwork for all the resources you enlist.`
        },
        {
          logo:'/Images/Itstaff_limit.png',
          alter:"limit",
          title:'Overcoming geological limitations',
          desc:`Many companies, especially startups, find it difficult to source the correct resource in a specific locale. Our extensive reach and breadth of resources enable you to source the required specialist across nations and geographies with the necessary technical expertise and experience you require.`
        },
        {
          logo:'/Images/Itstaff_flexi.png',
          alter:"flexi",
          title:'High flexibility',
          desc:`Augmented teams play a massive role in providing flexibility. Our staff augmentation engagement model enables you to scale quickly or scale down based on your requirements, to ensure sudden or unexpected workloads can be properly addressed and matched with the necessary resources.`
        },
        {
          logo:'/Images/Itstaff_author.png',
          alter:"author",
          title:'Sustained Authority',
          desc:`When businesses leverage our IT staff augmentation services on a demand basis, they retain complete management control and shape the project to their desired intention. This helps you to control project progress at all times and make the final call regarding all project decisions.`
        },
        
      ]
  return (
    <section className={styles.container_staff}>
    <div className={styles.heading_staff}>
      <h1 className={styles.h1_staff}>
      Benefits Of IT Staff Augmentation Services      </h1>
      <div className={styles.h1underline_staff}></div>
    </div>
    <div className={styles.box_card}>
        <Card colour={'#F58634'}  logo={data[0].logo} alter={data[0].alter} title={data[0].title} desc={data[0].desc}/>
        <Card colour={'#7D4FCE'}  logo={data[1].logo} alter={data[1].alter} title={data[1].title} desc={data[1].desc}/>
        <Card colour={'#FA4E54'}  logo={data[2].logo} alter={data[2].alter} title={data[2].title} desc={data[2].desc}/>
        <Card colour={'#1978B2'}  logo={data[3].logo} alter={data[3].alter} title={data[3].title} desc={data[3].desc}/>
        <Card colour={'#00C81F'}  logo={data[4].logo} alter={data[4].alter} title={data[4].title} desc={data[4].desc}/>
        <Card colour={'#7D4FCE'}  logo={data[5].logo} alter={data[5].alter} title={data[5].title} desc={data[5].desc}/>
    </div>
   </section>

  )
}

export default Itstaff