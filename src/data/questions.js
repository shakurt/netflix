const questionData = {
	english: [
		{
			id: 1,
			title: "What is Netflix?",
			answer: (
				<p>
					Netflix is a streaming service that offers a wide variety of
					award-winning TV shows, movies, anime, documentaries, and more on
					thousands of internet-connected devices.
					<br />
					<br /> You can watch as much as you want, whenever you want without a
					single commercial – all for one low monthly price. There's always
					something new to discover and new TV shows and movies are added every
					week!
				</p>
			),
		},
		{
			id: 2,
			title: "How much does Netflix cost?",
			answer: (
				<p>
					Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
					streaming device, all for one fixed monthly fee. Plans range from
					EUR8.99 to EUR17.99 a month. No extra costs, no contracts.
				</p>
			),
		},
		{
			id: 3,
			title: "Where can I watch?",
			answer: (
				<p>
					Watch anywhere, anytime. Sign in with your Netflix account to watch
					instantly on the web at netflix.com from your personal computer or on
					any internet-connected device that offers the Netflix app, including
					smart TVs, smartphones, tablets, streaming media players and game
					consoles.
					<br />
					<br />
					You can also download your favorite shows with the iOS, Android, or
					Windows 10 app. Use downloads to watch while you're on the go and
					without an internet connection. Take Netflix with you anywhere.
				</p>
			),
		},
		{
			id: 4,
			title: "How do I cancel?",
			answer: (
				<p>
					Netflix is flexible. There are no pesky contracts and no commitments.
					You can easily cancel your account online in two clicks. There are no
					cancellation fees – start or stop your account anytime.
				</p>
			),
		},
		{
			id: 5,
			title: "What can I watch on Netflix?",
			answer: (
				<p>
					Netflix has an extensive library of feature films, documentaries, TV
					shows, anime, award-winning Netflix originals, and more. Watch as much
					as you want, anytime you want.
				</p>
			),
		},
		{
			id: 6,
			title: "Is Netflix good for kids?",
			answer: (
				<p>
					The Netflix Kids experience is included in your membership to give
					parents control while kids enjoy family-friendly TV shows and movies
					in their own space.
					<br />
					<br />
					Kids profiles come with PIN-protected parental controls that let you
					restrict the maturity rating of content kids can watch and block
					specific titles you don’t want kids to see.
				</p>
			),
		},
	],
	persian: [
		{
			id: 1,
			title: "نتفلیکس چیست؟",
			answer: (
				<p className="persian-text">
					نتفلیکس یک سرویس استریم است که طیف گسترده ای از موارد را ارائه می دهد
					برنده جایزه نمایش های تلویزیونی، فیلم ها، انیمیشن ها، مستندها و موارد
					دیگر هزاران دستگاه متصل به اینترنت
					<br />
					<br />
					می‌توانید هر زمان که بخواهید، بدون الف تماشا کنید تک تجاری - همه برای
					یک قیمت ماهانه کم. همیشه وجود دارد چیز جدیدی برای کشف و هر برنامه
					تلویزیونی و فیلم های جدید اضافه می شود هفته
				</p>
			),
		},
		{
			id: 2,
			title: "هزینه نتفلیکس چقدر است؟",
			answer: (
				<p className="persian-text">
					نتفلیکس را در گوشی هوشمند، تبلت، تلویزیون هوشمند، لپ‌تاپ یا دستگاه
					پخش، همه با یک هزینه ثابت ماهانه. محدوده طرح ها از 8.99 یورو تا 17.99
					یورو در ماه. بدون هزینه اضافی، بدون قرارداد.
				</p>
			),
		},
		{
			id: 3,
			title: "کجا می توانم تماشا کنم؟",
			answer: (
				<p className="persian-text">
					در هر مکان و هر زمان تماشا کنید. برای تماشا با حساب نتفلیکس خود وارد
					شوید فوراً در وب در netflix.com از رایانه شخصی خود یا در آن هر دستگاه
					متصل به اینترنت که برنامه Netflix را ارائه می دهد، از جمله تلویزیون
					های هوشمند، گوشی های هوشمند، تبلت ها، پخش کننده های رسانه ای و بازی
					کنسول ها
					<br />
					<br />
					همچنین می توانید برنامه های مورد علاقه خود را با iOS، Android یا
					برنامه ویندوز 10. از دانلودها برای تماشا در حین حرکت استفاده کنید و
					بدون اتصال به اینترنت نتفلیکس را هر کجا با خود همراه داشته باشید.
				</p>
			),
		},
		{
			id: 4,
			title: "چگونه کنسل کنم؟",
			answer: (
				<p className="persian-text">
					نتفلیکس انعطاف پذیر است. هیچ قرارداد مزاحم و تعهدی وجود ندارد. شما به
					راحتی می توانید با دو کلیک آنلاین حساب خود را لغو کنید. وجود ندارد
					هزینه های لغو - هر زمان که بخواهید حساب خود را شروع یا متوقف کنید.
				</p>
			),
		},
		{
			id: 5,
			title: "چه چیزی را می توانم در نتفلیکس تماشا کنم؟",
			answer: (
				<p className="persian-text">
					نتفلیکس کتابخانه گسترده ای از فیلم های داستانی، مستند، تلویزیونی دارد
					نمایش ها، انیمه ها، نسخه های اصلی نتفلیکس برنده جایزه و موارد دیگر. به
					همان اندازه تماشا کنید همانطور که شما می خواهید، هر زمان که شما می
					خواهید.
				</p>
			),
		},
		{
			id: 6,
			title: "آیا نتفلیکس برای کودکان خوب است؟",
			answer: (
				<p className="persian-text">
					تجربه Netflix Kids در عضویت شما گنجانده شده است والدین کنترل می کنند
					در حالی که بچه ها از نمایش ها و فیلم های تلویزیونی مناسب خانواده لذت
					می برند در فضای خودشان
					<br />
					<br />
					نمایه‌های کودکان دارای کنترل‌های والدین محافظت‌شده با پین هستند که به
					شما امکان می‌دهند محدود کردن رده‌بندی بلوغ محتوایی که بچه‌ها می‌توانند
					تماشا کنند و مسدود کنند عناوین خاصی که نمی خواهید بچه ها ببینند.
				</p>
			),
		},
	],
};

export default questionData;
