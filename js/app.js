var my_news = [
		{
			author: 'Саша Печкин',
			text: 'В четверг, четвертого числа...'
		},
		{
			author: 'Просто Вася',
			text: 'Считаю что доллар должен стоить 35 рублей...'
		},
		{
			author: 'Гость',
			text: 'Бесплатно. Скачать. Лучший сайт ...'
		},
		{
			author: 'Саша Печкин',
			text: 'В четверг, четвертого числа...'
		},
		{
			author: 'Просто Вася',
			text: 'Считаю что доллар должен стоить 35 рублей...'
		},
		{
			author: 'Гость',
			text: 'Бесплатно. Скачать. Лучший сайт ...'
		}
]


var Article = React.createClass({
	render: function(){
		var author = this.props.data.author;
		var text = this.props.data.text;

		return (
			<div className="article">
				<p className="news_author">{author}</p>
				<p className="news_text">{text}</p>
			</div>	
		)
	}
})

var News = React.createClass({
	render: function(){
		var data = this.props.data;
		var newsTemplate;

		if (data.length > 0){
				newsTemplate = data.map(function(item, index){
					return (
						<div key={index}>
							<Article data={item} />
						</div>
						)
				})

			} else {
				newsTemplate = <p>К сожалению новостей нет</p>
			}

		return (
			<div className="news">
				{newsTemplate}
				<strong className={'news_count ' + (data.length > 0 ? '' : 'none')}>Всего новосте: {data.length}</strong>
			</div>
		);	
	}
})

var App = React.createClass({
	render: function(){
		return (
			<div className="app">
				<h3>Новости</h3>
				<News data={my_news}/>    {/*Комментарий*/}
			</div>
			);
	}
})


ReactDOM.render(
	<App />,
	document.getElementById('root')
	);