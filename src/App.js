import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards.js';
import useStyles from './styles.js';
import wordsToNumbers from 'words-to-numbers';

const alanKey = '0068848b14ae6b05216110d1f8c392f42e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newsHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if(command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1 );
                } else if(command ==='open'){
                    // three => 3
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true}) : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > 20) {
                        alanBtn().playText('Please try that again.')
                    } else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    }
                    
                }
            }
        })
    }, [])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src ="https://www.seldon.io/wp-content/uploads/2021/06/ai_artificial_intelligence_ml_machine_learning_vector_by_kohb_gettyimages_1146634284-100817775-large.jpg" className={classes.alanLogo} alt="alan logo"/>
            </div>
            <NewsCards  articles = {newsArticles} activeArticle={activeArticle} />
        </div>
    )
}

export default App;