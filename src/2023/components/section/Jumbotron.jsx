import Button from '../atoms/Button'
const Jumbotron = () => {
    return (
        <div className="bg-jumbotronImg">        
            <div className="container mx-auto max-w-[80%]">
            <h1>
            Innovative Possibilities in Africa with
Artificial Intelligence|
            </h1>
            <p>
            27-28 October with over 50 sessions – Lagos, Nigeria
            </p>
            <Button name='Get your tickets' />
            <h2> About the Conference </h2>
            <p>

            Azure Nigeria Community conference is Africa’s largest community-driven Microsoft Cloud Technology event that brings together business leaders, IT experts, world-leading speakers, large customers, Microsoft partners, and thousands of delegates. It offers in-depth technical learning and an ideal professional networking environment for all attendees.
            </p>
            <p>
            The Azure Nigeria conference offers cutting-edge technology content, in both business and technology arenas, representing a perfect learning and professional opportunity. our attendees will get to learn from hundreds of educational sessions, dozens of real-life case studies, and panel discussions, delivered by 100+ world-class experts from across the world.
            </p>
            <div>
                <div>
                    <h3>
                        Where
                    </h3>
                    <p>
                        Lagos, Nigeria
                    </p>
                </div>
                <div>

                <h3>
                        When
                    </h3>
                    <p>
                        Lagos, Nigeria
                    </p>
                </div>
            </div>
            <button name='View Speakers'/>
            </div>
        </div>

    )
}

export default Jumbotron;