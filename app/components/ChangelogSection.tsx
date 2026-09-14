"use client";

import React from "react";
import "./ChangelogSection.css";

export default function ChangelogSection() {
  return (
    <div className="cr-changelog-section" id="changelog">
      <div className="cr-changelog-container">
        {/* Main Title Header */}
        <div className="cr-changelog-header">
          <h1 className="cr-changelog-main-title">
            See what<br />
            <span className="cr-changelog-title-muted">gets shipped</span>
          </h1>
        </div>

        {/* Changelog Articles List */}
        <div className="cr-changelog-list">
          <article className="cr-changelog-article" id="v2.0.0">
            {/* Sticky Sidebar Meta */}
            <div className="cr-changelog-meta">
              <h2 className="cr-changelog-version">V2 is here</h2>
              <p className="cr-changelog-date">Aug 19, 2026</p>
            </div>

            {/* Main Article Content */}
            <div className="cr-changelog-body">
              {/* Hero Banner Image */}
              <div className="cr-changelog-img-wrap">
                <img
                  src="/assets/changelog/v2-hero.png"
                  alt="V2 is here"
                  className="cr-changelog-img"
                  loading="lazy"
                />
              </div>

              <p className="cr-changelog-p">
                V2 is here. This is the biggest release we have ever shipped: a rebuilt platform, faster and clearer end to end, with brands and creators each getting an app designed for what they actually came to do.
              </p>

              <p className="cr-changelog-p">
                Your own roles. Retainers. Content approved before it posts. Money that moves through a real ledger. Everything below is live today, existing accounts carry over, and there is nothing to migrate.
              </p>

              <h3>Roles that are actually yours</h3>
              <p className="cr-changelog-p">
                Content Rewards has its own permissions now. Before this, brand access was whatever Whop said it was, and there was no role you could set from inside the product.
              </p>
              <ul className="cr-changelog-list-items">
                <li>
                  <strong>Owner</strong>: full access, including naming other Owners, transferring ownership, and deleting the organization.
                </li>
                <li>
                  <strong>Admin</strong>: everything except naming Owners, or acting on another Owner or Admin.
                </li>
                <li>
                  <strong>Moderator</strong>: runs campaigns and reviews content, but cannot add, remove or change team members.
                </li>
              </ul>
              <p className="cr-changelog-p">
                Only Owners can appoint other Owners.
              </p>

              <h3>One brand, however many Whop installs</h3>
              <p className="cr-changelog-p">
                V2 has real organizations. Multiple Whop experiences can sit under a single org, and campaigns belong to the organization rather than to an installed Whop experience.
              </p>
              <p className="cr-changelog-p">
                If you ran two Whop experiences before, you effectively had two disconnected accounts: two member lists, two campaign lists, two ledgers, and no way to switch. Now it is one brand with two front doors. Agencies can nest brands underneath and see performance across all of them.
              </p>

              <h3>Retainers</h3>
              <p className="cr-changelog-p">
                Recurring contracts on weekly, bi-weekly or monthly cycles, with a set number of cycles, per-platform deliverables, a creator cap, and a choice between pro-rated and all-or-nothing payout. Each cycle escrows up front, and whatever the creator does not earn returns to your budget when the cycle closes.
              </p>
              <p className="cr-changelog-p">
                Per-post campaigns, a flat rate per submission, are now open to every brand after an early beta.
              </p>

              <h3>Approve content before it gets posted</h3>
              <p className="cr-changelog-p">
                This is the biggest change in V2.
              </p>
              <p className="cr-changelog-p">
                Turn on pre-approval and creators upload the <strong>raw file</strong> for review before anything is published. You watch the unpublished cut, then approve, reject, or request changes: a real third option, with versions, so a creator can revise without starting over.
              </p>
              <p className="cr-changelog-p">
                You also approve <strong>which accounts</strong> it can post from. That is enforced, not advisory. Post from an account you did not approve and the submission is refused. With pre-approval on, posting without an approved draft is blocked outright.
              </p>
              <p className="cr-changelog-p">
                Every draft gets its own thread, so feedback is a conversation instead of a one-line rejection note.
              </p>

              <h3>Flagging</h3>
              <p className="cr-changelog-p">
                Flagging is first-class now: a real dispute-style conversation between the campaign and creator, with a type, a reason, and a resolution. A flagged clip stops earning immediately and its funds stay put until it is resolved.
              </p>
              <p className="cr-changelog-p">
                Creators can appeal in a dedicated thread. Brands can raise flags but no longer resolve them. That sits with the Content Rewards team, so a dispute has a neutral reviewer.
              </p>

              <h3>Campaign configuration</h3>
              <p className="cr-changelog-p">
                You can categorize campaigns with eight content types (clipping, slideshows, YouTube longform, UGC with face, UGC faceless, reposting, logo and sound) across 335 niches.
              </p>
              <ul className="cr-changelog-list-items">
                <li>
                  <strong>Reference materials</strong>: real files, not just links. Video, images, brand assets, PSDs and PDFs.
                </li>
                <li>
                  <strong>Your ideal creator</strong>: describe them in your own words, and pick creator types (clipper, UGC, editor, influencer).
                </li>
                <li>
                  <strong>Application controls</strong>: cap applicants, set a review deadline, and auto-decline what you do not get to.
                </li>
                <li>
                  <strong>Templates</strong> for the four common campaign shapes, save as draft, and a launch date you can set in advance.
                </li>
              </ul>

              <h3>For creators</h3>
              <p className="cr-changelog-p">
                A real wallet with a balance they control and can withdraw on demand. Before, money simply appeared. An earnings page shows every payout as Queued, Arriving and Received, with the fee breakdown, and comments are threaded and pinned to a timestamp in the clip.
              </p>
              <p className="cr-changelog-p">
                Per-post and retainer payouts now settle in <strong>15 minutes</strong>. CPM earnings accrue for 7 days, then clear after a 3-day hold.
              </p>

              <h3>What costs more</h3>
              <p className="cr-changelog-p">
                A payment processing fee is added on top of your budget and shown as a line item before you pay.
              </p>
              <p className="cr-changelog-p">
                The Content Rewards platform fee is unchanged: 10%, or 8% for verified accounts, drawn from the funded budget as before.
              </p>

              {/* Fee Breakdown Diagram Image */}
              <div className="cr-changelog-img-wrap">
                <img
                  src="/assets/changelog/fee-breakdown.png"
                  alt="Fee breakdown by campaign type"
                  className="cr-changelog-img"
                  loading="lazy"
                />
              </div>

              <h3>What is not here yet</h3>
              <p className="cr-changelog-p">
                Two things V1 did that V2 does not, so you are not surprised:
              </p>
              <ul className="cr-changelog-list-items">
                <li>
                  <strong>Bulk approve and reject</strong> is not wired up yet.
                </li>
                <li>
                  <strong>CSV export</strong> for submissions and creators is coming. Analytics export still works.
                </li>
              </ul>
              <p className="cr-changelog-p">
                Both are on the list.
              </p>

              <h3>Questions</h3>
              <p className="cr-changelog-p">
                Ask. We would rather answer now than have you find out mid-campaign.
              </p>

              <div>
                <h3>New</h3>
                <ul className="cr-changelog-list-items">
                  <li>
                    Content Rewards is rebuilt from the ground up, with separate apps purpose-built for brands and for creators.
                  </li>
                  <li>
                    Discover: a browsable campaign feed so creators can find the work that actually fits them.
                  </li>
                </ul>
              </div>

              <div>
                <h3>Improved</h3>
                <ul className="cr-changelog-list-items">
                  <li>
                    Onboarding has been redesigned end to end for creators, brands and agencies.
                  </li>
                  <li>
                    Creators pay a flat 10% fee on every campaign type, with no step-down ladder. Retainer and per-post campaigns with a budget of $5,000 or more carry no creator fee at all.
                  </li>
                </ul>
              </div>

              <a
                className="cr-changelog-readmore-btn"
                href="#v2.0.0"
              >
                Read more
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
