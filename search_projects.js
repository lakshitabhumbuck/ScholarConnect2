document.addEventListener('DOMContentLoaded', function () {
    const papers = [
      {
        title: "The Impact of Artificial Intelligence on Academics: A Concise Overview",
        link: "https://www.researchgate.net/publication/370944811_The_Impact_of_Artificial_Intelligence_on_Academics_A_Concise_Overview",
        topic: "cs",
        subcategory: "ai"
      },
      
       {
        title: "A systematic review of stock market prediction using machine learning and statistical techniques",
        link: "https://www.researchgate.net/publication/328783489_Big_Data_and_Big_Data_Analytics_Concepts_Types_and_Technologies",
        topic: "cs",
        subcategory: "ai"
      },
      {
        title: "Big Data and Big Data Analytics: Concepts, Types, and Technologies",
        link: "https://www.researchgate.net/publication/328783489_Big_Data_and_Big_Data_Analytics_Concepts_Types_and_Technologies",
        topic: "cs",
        subcategory: "bigdata"
      },
      {
        title: "Mechanical Properties of Engineering Materials: Relevance in Design and Manufacturing",
        link: "https://www.researchgate.net/publication/324826709_Mechanical_Properties_of_Engineering_Materials_Relevance_in_Design_and_Manufacturing",
        topic: "mech",
        subcategory: ""
      }
    ];
  
    function displayPapers(papers) {
      const relatedResultsContent = document.getElementById('related-results-content');
      relatedResultsContent.innerHTML = '';
  
      papers.forEach(paper => {
        const paperElement = document.createElement('div');
        paperElement.className = 'related-paper';
        paperElement.innerHTML = `
          <h3>${paper.title}</h3>
          <a href="${paper.link}" target="_blank">Read more</a>
        `;
        relatedResultsContent.appendChild(paperElement);
      });
    }
  
    document.getElementById('search-form').addEventListener('submit', function (event) {
      event.preventDefault();
  
      const topic = document.getElementById('topic').value;
      const subcategory = document.getElementById('subcategory').value;
  
      let filteredPapers = papers;
  
      if (topic) {
        filteredPapers = filteredPapers.filter(paper => paper.topic === topic);
      }
  
      if (subcategory) {
        filteredPapers = filteredPapers.filter(paper => paper.subcategory === subcategory);
      }
  
      displayPapers(filteredPapers);
    });
  
    // Display all papers initially
    displayPapers(papers);
  });