/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/
const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

  const container = document.querySelector('.container');
  const elements = createPosts(posts);
  container.append(...elements);

  function createPosts(arr) {
      const elements = [];
      arr.forEach(post => {
          const el = createPost(post);
          elements.push(el);
      });
      return elements;
  }

  function createPost ({img, title, text, link}) {
    const post = document.createElement('div');
    post.classList.add('post');
  
    const postImg = document.createElement('img');
    postImg.classList.add('postImg');
    postImg.src = img;
  
    const postTitle = document.createElement('h2');
    postTitle.classList.add('postTitle');
    postTitle.textContent = title;
  
    const postText = document.createElement('p');
    postText.classList.add('postText');
    postText.textContent = text;
  
    const postLink= document.createElement('a');
    postLink.classList.add('postLink');
    postLink.href = link;
    postLink.textContent = link;

    post.append(postImg, postTitle, postText, postLink);
    return post;
  }