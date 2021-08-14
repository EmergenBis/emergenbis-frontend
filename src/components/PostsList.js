import React from "react"
import { Link } from "react-router-dom"
import Button from "./MainButton"
import "./style/PostsList.css"

class PostsListItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="BadgeListItem mt-5">
                    <div className="col-7 my-5">
                        <div className="row">
                            <h4 className="text-center mt-3">
                                {this.props.emergen.u_level} 
                            </h4>
                            <p className="text-center">{this.props.emergen.matter}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const useSearchBadges = (badges) => {

    const [query, setQuery] = React.useState('');
    const [filteredBadges, setfilteredBadges] = React.useState(badges);

    React.useMemo(() => {

        const result = badges.filter((badge) => {
            return `${badge.name}`.toLowerCase().includes(query.toLowerCase());
        });

        setfilteredBadges(result);
    }, [badges, query]);

    return { query, setQuery, filteredBadges };
}


const BadgesList = (props) => {
    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    if (filteredBadges.lenght == 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                    <h3>No badges were found</h3>
                    <Link className="btn btn-success" to="/new">
                        Create new badge
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className="BadgesList__container">
                <div className="BadgeList__search-bar">
                    <div className="row BadgeList__search-bar__row">
                        <div className="col">
                            <div className="form-group mt-3">
                                <label>Filter Badges</label>
                                <input
                                    type="text"
                                    className="form-control BadgeList__search"
                                    value={query}
                                    onChange={(e) => {
                                        setQuery(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="Badges__container">
                                <div className="Badges__button">
                                    <Button
                                        theme={"Button-light"}
                                        contentText={"New Badge"}
                                        link={"/new"}
                                    >

                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container List mb-5">
                    <div className="list-unstyled">
                        {filteredBadges.map((badge) => {
                            return (
                                <div key={badge._id}>
                                    <Link 
                                        className="text-reset text-decoration-none" 
                                        to={`/${badge._id}`}
                                    >
                                        <PostsListItem badge={badge}></PostsListItem>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BadgesList;