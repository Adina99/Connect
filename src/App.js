import './App.css';
import PostCard from './components/PostCard';
import { posts } from './data/Posts';
import Navbar from './components/Navbar';
import { contacts } from './data/Contacts';
import Contact from './components/Contact';
import Add from './components/Add';
import { adds } from './data/Adds';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <div className="content">
                    <div className="contacts">
                        <h3>Connect with people</h3>
                        {contacts.map((contact) => {
                            return <Contact picture={contact.picture} user={contact.user} />;
                        })}
                    </div>
                    <div className="posts">
                        {posts.map((post) => {
                            return (
                                <PostCard
                                    image={post.image}
                                    user={post.user}
                                    photo={post.photo}
                                    description={post.description}
                                    commentPicture={post.commentPicture}
                                    commentUser={post.commentUser}
                                    commentOfUser={post.commentOfUser}
                                />
                            );
                        })}
                        <p className="no-more-posts">No more posts for today</p>
                    </div>
                    <div className="adds">
                        <h3 className="sponsors">Sponsors</h3>
                        <div className="add-cards">
                            <div className="add-scrollable">
                                {adds.map((add) => {
                                    return (
                                        <Add
                                            title={add.title}
                                            image={add.image}
                                            description={add.description}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
