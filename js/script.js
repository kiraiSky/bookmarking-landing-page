const features = document.querySelectorAll(".features-list li");

features.forEach( feature =>{
  feature.addEventListener('click', (event) =>{
    handleFeaturesList(feature);
  })
})

function handleFeaturesList(item){
  features.forEach(feature =>{
    feature.classList.remove('active');
  })

  item.classList.add('active');
  featureName = item.classList.item(0);

  const divFeatures = document.querySelectorAll('.feature');
  divFeatures.forEach(element =>{
    if(element.id === featureName){
      element.style.display = 'flex';
    }else{
      element.style.display = 'none';
    }
  })
}

