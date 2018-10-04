import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectStatus from "../../../../lib/components/status/mentorship-status/mentorship-status";
import DifficultyPips from "../../../../lib/components/difficulty-pips/difficulty-pips";
import TeamListing from "../../../../lib/components/team-listing/team-listing";
import TechListing from "../../../../lib/components/tech-listing/tech-listing";
import Card from "../../../../lib/components/card/card";
import CardTitle from "../../../../lib/components/card/card-title/card-title";
import CardContent from "../../../../lib/components/card/card-content/card-content";
import CardHeader from "../../../../lib/components/card/card-header/card-header";

class MentorshipPreview extends Component {
  render() {
    const { mentorship } = this.props;

    return (
      <Card>
        <CardHeader>
          <div className="dtc v-mid mid-gray mb0">
            <ProjectStatus status={mentorship.status} />
          </div>
          <DifficultyPips difficulty={mentorship.difficulty} />
        </CardHeader>
        <CardContent>
          <CardTitle to={`/mentorships/${mentorship._id}`}>{mentorship.title}</CardTitle>
          <Link
            className="no-underline mid-gray"
            to={`/mentorships/${mentorship._id}`}
          >
            <p>{mentorship.description}</p>
          </Link>

          {/* TECH TOOL LISTING */}
          <TechListing technologies={mentorship.technologies} />
          {/* PROJECT LEAD LISTING */}
          <TeamListing teamMembers={mentorship.mentorshipLead} />
          {/* TEAM LISTING*/}
          <TeamListing teamMembers={mentorship.agents} />
        </CardContent>
      </Card>
    );
  }
}

export default MentorshipPreview;
