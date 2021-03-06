import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Button, Card, CardContent, Typography} from '@material-ui/core';
import classNames from 'classnames';
import {FuseAnimate, FuseAnimateGroup} from '@fuse';

const styles = theme => ({
    root   : {
        '& .container': {
            width   : '100%',
            maxWidth: 840,
            margin  : '0 auto'
        }
    },
    card   : {
        position: 'relative'
    },
    header : {
        height        : 600,
        background    : "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
        backgroundSize: 'cover',
        color         : '#fff'
    },
    badge  : {
        backgroundColor: theme.palette.error.main,
        color          : theme.palette.getContrastText(theme.palette.error.main)
    },
    content: {},
    price  : {
        backgroundColor: theme.palette.grey[600],
        color          : theme.palette.getContrastText(theme.palette.grey[600])
    }
});

class PricingStyle3Page extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <div className={classNames(classes.root, "")}>

                <div className={classNames(classes.header, "flex")}>

                    <div className="container p-24">

                        <div className="text-center my-128 mx-24">

                            <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                                <Typography variant="h2" color="inherit" className="font-light">
                                    Simple Pricing!
                                </Typography>
                            </FuseAnimate>

                            <FuseAnimate duration={400} delay={600}>
                                <Typography variant="subtitle1" color="inherit" className="opacity-75 mt-16 mx-auto max-w-512">
                                    The most advanced customer support tools with a simple and affordable pricing. And you can always try
                                    for 30 days, free!
                                </Typography>
                            </FuseAnimate>
                        </div>
                    </div>
                </div>

                <div className={classNames(classes.content, "-mt-192")}>

                    <div className="container">

                        <FuseAnimateGroup
                            enter={{
                                animation: "transition.slideUpBigIn"
                            }}
                            className="flex items-center justify-center flex-wrap"
                        >
                            <div className="w-full max-w-320 sm:w-1/3 p-12">
                                <Card className={classes.card}>

                                    <div className="p-32 text-center">
                                        <Typography className="text-32">
                                            Starter
                                        </Typography>
                                        <Typography color="textSecondary" className="text-16 font-medium">
                                            For small teams
                                        </Typography>
                                    </div>

                                    <CardContent className="text-center p-0">

                                        <div className={classNames(classes.price, "flex items-end justify-center py-16 px-32")}>
                                            <div className="flex justify-center">
                                                <Typography color="inherit" className="font-medium">$</Typography>
                                                <Typography color="inherit" className="text-32 ml-4 mr-8 font-light leading-none">29</Typography>
                                            </div>
                                            <Typography color="inherit">
                                                monthly per user
                                            </Typography>
                                        </div>

                                        <div className="flex flex-col p-32">
                                            <Typography color="textSecondary" className="mb-16">
                                                Unlimited projects
                                            </Typography>
                                            <Typography color="textSecondary" className="mb-16">
                                                Unlimited pages
                                            </Typography>
                                            <Typography color="textSecondary" className="mb-16">
                                                Unlimited disk space
                                            </Typography>
                                            <Typography color="textSecondary">
                                                24 / 7 Free support
                                            </Typography>
                                        </div>
                                    </CardContent>

                                    <div className="flex flex-col items-center justify-center pb-32 px-32">
                                        <Button variant="contained" color="secondary" className="w-full">GET STARTED FREE</Button>
                                        <Typography color="textSecondary" className="mt-16">
                                            7 day free trial to start
                                        </Typography>
                                    </div>
                                </Card>
                            </div>

                            <div className="w-full max-w-320 sm:w-1/3 p-12">
                                <Card className={classes.card} raised>

                                    <div className="p-32 text-center">
                                        <Typography className="text-32">
                                            Pro
                                        </Typography>
                                        <Typography color="textSecondary" className="text-16 font-medium">
                                            For larger teams
                                        </Typography>
                                    </div>

                                    <CardContent className="text-center p-0">

                                        <div className={classNames(classes.price, "flex items-end justify-center py-16 px-32")}>
                                            <div className="flex justify-center">
                                                <Typography color="inherit" className="font-medium">$</Typography>
                                                <Typography color="inherit" className="text-32 ml-4 mr-8 font-light leading-none">59</Typography>
                                            </div>
                                            <Typography color="inherit">
                                                monthly per user
                                            </Typography>
                                        </div>

                                        <div className="flex flex-col p-32">
                                            <Typography color="textSecondary" className="mb-16">
                                                Unlimited projects
                                            </Typography>
                                            <Typography color="textSecondary" className="mb-16">
                                                Unlimited pages
                                            </Typography>
                                            <Typography color="textSecondary" className="mb-16">
                                                Unlimited disk space
                                            </Typography>
                                            <Typography color="textSecondary">
                                                24 / 7 Free support
                                            </Typography>
                                            <Typography color="textSecondary">
                                                Advanced reporting
                                            </Typography>
                                            <Typography color="textSecondary">
                                                Customizable interface
                                            </Typography>
                                            <Typography color="textSecondary">
                                                CRM Integration
                                            </Typography>
                                        </div>
                                    </CardContent>

                                    <div className="flex flex-col items-center justify-center pb-32 px-32">
                                        <Button variant="contained" color="secondary" className="w-full">GET STARTED FREE</Button>
                                        <Typography color="textSecondary" className="mt-16">
                                            30 day free trial to start
                                        </Typography>
                                    </div>
                                </Card>
                            </div>

                            <div className="w-full max-w-320 sm:w-1/3 p-12">
                                <Card className={classes.card}>

                                    <div className="p-32 text-center">
                                        <Typography className="text-32">
                                            Enterprise
                                        </Typography>
                                        <Typography color="textSecondary" className="text-16 font-medium">
                                            For big teams
                                        </Typography>
                                    </div>

                                    <CardContent className="text-center p-0">

                                        <div className={classNames(classes.price, "flex items-end justify-center py-16 px-32")}>
                                            <div className="flex justify-center">
                                                <Typography color="inherit" className="font-medium">$</Typography>
                                                <Typography color="inherit" className="text-32 ml-4 mr-8 font-light leading-none">29</Typography>
                                            </div>
                                            <Typography color="inherit">
                                                monthly per user
                                            </Typography>
                                        </div>

                                        <div className="flex flex-col p-32">
                                            <Typography color="textSecondary" className="mb-16">
                                                Unlimited projects
                                            </Typography>
                                            <Typography color="textSecondary" className="mb-16">
                                                Unlimited pages
                                            </Typography>
                                            <Typography color="textSecondary" className="mb-16">
                                                Unlimited disk space
                                            </Typography>
                                            <Typography color="textSecondary">
                                                For full feature list, call us
                                            </Typography>
                                        </div>
                                    </CardContent>

                                    <div className="flex flex-col items-center justify-center pb-32 px-32">
                                        <Button variant="contained" color="secondary" className="w-full">CALL US</Button>
                                        <Typography color="textSecondary" className="mt-16">
                                            90 day free trial to start
                                        </Typography>
                                    </div>
                                </Card>
                            </div>
                        </FuseAnimateGroup>
                        <div className="flex flex-col items-center py-96 text-center sm:text-left">

                            <Typography variant="h4" className="pb-32 font-light">Frequently Asked Questions</Typography>

                            <div className="flex flex-wrap w-full">

                                <div className="w-full sm:w-1/2 p-24">
                                    <Typography className="text-20 mb-8">How does free trial work?</Typography>
                                    <Typography className="text-16" color="textSecondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt
                                        accumsan. In dignissim laoreet ipsum eu interdum.
                                    </Typography>
                                </div>

                                <div className="w-full sm:w-1/2 p-24">
                                    <Typography className="text-20 mb-8">Can I cancel any time?</Typography>
                                    <Typography className="text-16" color="textSecondary">
                                        Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.
                                        Donec maximus ipsum in malesuada hendrerit.
                                    </Typography>
                                </div>

                                <div className="w-full sm:w-1/2 p-24">
                                    <Typography className="text-20 mb-8">What happens after my trial ended?</Typography>
                                    <Typography className="text-16" color="textSecondary">
                                        Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.
                                        Donec maximus ipsum in malesuada hendrerit.
                                    </Typography>
                                </div>

                                <div className="w-full sm:w-1/2 p-24">
                                    <Typography className="text-20 mb-8">Can I have a discount?</Typography>
                                    <Typography className="text-16" color="textSecondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt
                                        accumsan. In dignissim laoreet ipsum eu interdum.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(PricingStyle3Page);
