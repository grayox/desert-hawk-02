import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import withStyles from "@material-ui/core/styles/withStyles";

import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ContactsIcon from '@material-ui/icons/Contacts';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import FlagIcon from '@material-ui/icons/Flag';
import LabelIcon from '@material-ui/icons/Label';
import RemoveIcon from '@material-ui/icons/Remove';
import SaveIcon from '@material-ui/icons/Save';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

// @material-ui/core
import { Typography } from "@material-ui/core";

// import {FuseAnimateGroup, FuseHighlight, FusePageSimple} from '@fuse';
import { FuseAnimateGroup } from '@fuse';

// core components
import GridContainer from "../../vendors/vendor-1/components/Grid/GridContainer";

// custom components
import SelectControl from '../../components/selects/SelectControl';
import DashboardGridItem from './DashboardGridItem'

// CategorySelect
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = theme => ({
  container: {
    padding: '24px',
  },
});

function DashboardGridItems(props) {
  const { classes, onClickInfo, } = props;
  const rows = getRows(props);
  // console.log('props', props);
  return (
    rows.map(row => (
      <FuseAnimateGroup
        key={row.name}
        delay={200}
        enter={{ animation: 'transition.slideRightBigIn' }}
        leave={{ animation: 'transition.slideLeftBigOut' }}
      >
        <Typography variant="subheading" className="opacity-75 font-light">{row.name}</Typography>
        <GridContainer className={classes.container}>
          {row.cells.map(cell => (
            <DashboardGridItem
              key={cell.label}
              item={cell}
              onClickInfo={() => onClickInfo(cell)}
            />
          ))}
        </GridContainer>
      </FuseAnimateGroup>
    ))
  );
}

const marketDescription = (
  <div className="mt-12">
    To specify the location of your market, you must identify all three levels:
    <ul>
      <li>country</li>
      <li>state or region</li>
      <li>location</li>
    </ul>
  </div>
);
  
function getRows(props) {
  const {
    categoryOpen, categoryItems, bizCategory,
    onCategoryOpen, onCategoryClose, onCategoryChange,
    geoLocal, geoRegion, geoNation,
    onClickGeoLocal, onClickGeoRegion, onClickGeoNation,
  } = props;
  return [
    {
      name: 'Balances',
      cells: [
        {
          label: 'Net',
          data: 5,
          icon: DragHandleIcon,
          color: 'warning',
          btn: <Button size='small'>Hai</Button>,
          desc:
            <div>
              <div>
                Your net balance is the most important balance for you to maintain above zero.
                It represents the difference between your deposits and withdrawals.
                Or, in other words, how many leads you referred compared to how many you received.
                </div>
              <div className="mt-12">
                If you maintain a positive net balance, you will always be able to see your inbox
                and claim new leads as they arrive.
                If your net balance reaches zero, your inbox will lock and you won&rsquo;t be able
                to view it until you deposit more leads.
                </div>
            </div>
          ,
        },
        {
          label: 'Deposits',
          data: 5,
          icon: AddIcon,
          color: 'success',
          btn: <Button size='small'>Deposit new lead</Button>,
          desc:
            <div>
              <div>
                Here we keep track of all the valid leads you submitted and referred into the network.
                To make a deposit, click the button then fill out the form.
                The form&rsquo;s &ldquo;save&rdquo; button will remain disabled
                until you complete all required fields.
                </div>
              <div className="mt-12">
                These are all your required fields.
                  <ul>
                  <li>name</li>
                  <li>phone number or email</li>
                  <li>zip code</li>
                  <li>lead type</li>
                </ul>
              </div>
            </div>
          ,
        },
        {
          label: 'Withdrawals',
          data: 5,
          icon: RemoveIcon,
          color: 'danger',
          btn: <Button size='small'>See available</Button>,
          desc:
            <div>
              <div>
                This is the number of leads you claimed from your inbox and placed into your archive for your use.
                To claim a lead from your inbox, just click it.
                Then we will automatically place that lead in your archive and you will be able to see it continuously.
                </div>
              <div className="mt-12">
                Unlike new leads in your inbox, you will always be able to see your archived leads &mdash;
                even if your net balance falls to zero.
                </div>
            </div>
          ,
        },
        {
          label: 'Challenges',
          data: <span>&minus;5</span>,
          icon: RemoveIcon,
          color: 'primary',
          btn: <Button size='small'>See challenges</Button>,
          desc:
            <div>
              <div>
                This is the number of net lead challenges you have won.
                Lost challenges are shown as a negative number.
                Users can challenge leads they believe are not legitimate.
                </div>
              <div className="mt-12">
                Users that have too many leads challenged will be subjected to restrictions for abuse.
                </div>
            </div>
          ,
        },
      ]
    },
    {
      name: 'Inventories',
      cells: [
        {
          label: 'Inbox',
          data: 5,
          icon: CloudDownloadIcon,
          color: 'info',
          btn: <Button size='small'>View inbox</Button>,
          desc:
            <div>
              List of all leads matching your type category and market location
              </div>
          ,
        },
        {
          label: 'Archive',
          data: 5,
          icon: SaveIcon,
          color: 'success',
          btn: <Button size='small'>View archive</Button>,
          desc:
            <div>
              List of all previously available leads you claimed that are now exclusively yours
              </div>
          ,
        },
        {
          label: 'Outbox',
          data: 5,
          icon: CloudUploadIcon,
          color: 'primary',
          btn: <Button size='small'>View outbox</Button>,
          desc:
            <div>
              List of all leads you submitted and referred to your peers on the network
              </div>
          ,
        },
        {
          label: 'Contacts',
          data: 5,
          icon: ContactsIcon,
          color: 'success',
          btn: <Button size='small'>Add contact</Button>,
          desc:
            <div>
              List of everyone you invited to join the network
              </div>
          ,
        },
      ]
    },
    {
      name: 'Key settings',
      cells: [
        {
          label: 'Category',
          data: <span className="capitalize">{bizCategory}</span>,
          icon: LabelIcon,
          color: 'info',
          typog: 'subheading',
          btn:
            <SelectControl
              size='small'
              control='button'
              label='Change category'
              open={categoryOpen}
              items={categoryItems}
              value={bizCategory}
              onOpen={onCategoryOpen}
              onClick={onCategoryOpen}
              onClose={onCategoryClose}
              onChange={onCategoryChange}
            />
          ,
          desc:
            <div>
              Tell us the type of leads you want.
                <ul>
                <li>
                  <div className="mt-12">
                    <span className="mr-12">Home</span>
                    {React.createElement(HomeIcon)}
                  </div>
                  <div>
                    Select this if you are a real estate broker or agent selling homes to residential buyers
                    </div>
                </li>
                <li>
                  <div className="mt-12">
                    <span className="mr-12">Mortgage</span>
                    {React.createElement(AccountBalanceIcon)}
                  </div>
                  <div>
                    Select this if you are a real estate mortgage broker or agent selling financing to home buyers
                    </div>
                </li>
                <li>
                  <div className="mt-12">
                    <span className="mr-12">Insurance</span>
                    {React.createElement(AssessmentIcon)}
                  </div>
                  <div>
                    Select this if you are an insurance broker or agent selling property and casualty policies
                    </div>
                </li>
                <li>
                  <div className="mt-12">
                    <span className="mr-12">Financial</span>
                    {React.createElement(AssignmentIcon)}
                  </div>
                  <div>
                    Select this if you are a financial planner and advise clients on their personal finances
                    </div>
                </li>
              </ul>
            </div>
          ,
        },
        {
          label: 'Location',
          // data: 'Scholes',
          data: geoLocal,
          icon: TrackChangesIcon,
          color: 'primary',
          typog: 'subheading',
          btn: <Button size='small' onClick={onClickGeoLocal}>Reset details</Button>,
          desc:
            <div>
              <div>
                The third level of your location selection.
                (In some small states or regions, it can be the only third level choice.
                In that case, the third level choice is usually identical to the name of the state or region.)
                </div>
              {marketDescription}
            </div>
          ,
        },
        {
          label: 'State',
          // data: 'Mississippi',
          data: geoRegion,
          icon: FlagIcon,
          color: 'warning',
          typog: 'subheading',
          btn: <Button size='small' onClick={onClickGeoRegion}>Reset details</Button>,
          desc:
            <div>
              <div>
                The second level of your location selection. (Called &ldquo;region&rdquo; in certain countries.)
                </div>
              {marketDescription}
            </div>
          ,
        },
        {
          label: 'Country',
          // data: 'United States',
          data: geoNation,
          icon: TrackChangesIcon,
          color: 'primary',
          typog: 'subheading',
          btn: <Button size='small' onClick={onClickGeoNation}>Reset details</Button>,
          desc:
            <div>
              <div>
                The first level of your location selection.
                </div>
              {marketDescription}
            </div>
          ,
        },
      ]
    },
  ]
}

DashboardGridItems.propTypes = {
  classes: PropTypes.object.isRequired,
  onCategoryOpen: PropTypes.func.isRequired,
  onCategoryClose: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onClickInfo: PropTypes.func.isRequired,
  categoryOpen: PropTypes.bool.isRequired,
  categoryItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  bizCategory: PropTypes.string.isRequired,
  geoLocal: PropTypes.string,
  geoRegion: PropTypes.string,
  geoNation: PropTypes.string,
  onClickGeoLocal: PropTypes.func.isRequired,
  onClickGeoRegion: PropTypes.func.isRequired,
  onClickGeoNation: PropTypes.func.isRequired,
};
 
export default withStyles(styles)(DashboardGridItems);