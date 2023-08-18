import React from "react";
import { ReactDOM,useState } from "react";


function HomePage()
{
    return(
        <div>
            <h2 className="display-4">Welcome to NestHub: Your Ultimate Rental Solution</h2>
            <p className="lead">
            • Discover a new way to find and rent your dream home with NestHub! Our innovative rental platform is designed to simplify and enhance your property search experience. Whether you're looking for a cozy apartment, a spacious house, or a trendy urban loft, NestHub has you covered. With a vast selection of high-quality rental properties, intuitive search tools, and a user-friendly interface, finding your perfect nest has never been easier.
            </p>
            <small className="text-muted"><h6 className="display-4">Key features:</h6></small>
            <p className="lead">
            • Extensive Property Listings: Explore a wide range of rental properties, from apartments and houses to condos and townhouses. Our platform offers an extensive collection of options to suit various preferences and budgets.
            </p>
            <p className="lead">
            • Advanced Search Filters: Customize your property search using our advanced filters. Filter by location, price, number of bedrooms, amenities, and more to quickly narrow down your options and find properties that match your criteria.
            </p>
            <p className="lead">
            • User Reviews and Ratings: Make informed decisions with the help of real user reviews and ratings. Hear about the experiences of previous tenants to gain insights into the property and the landlord.
            </p>
            <p className="lead">
            • Saved Searches and Favorites: Create an account to save your favorite properties and searches. Never miss out on a potential gem and easily keep track of properties that catch your eye.
            </p>
            <p className="lead">
            • Instant Booking and Messaging: Streamline the rental process by reaching out to landlords directly through our messaging system. Some properties even offer instant booking for added convenience.
            </p>
        </div>
        )
}

export default HomePage;