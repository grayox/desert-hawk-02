import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent, DemoSidebarContent} from '@fuse';
import {Hidden, Icon, IconButton} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class SimpleLeftSidebarSample extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-col flex-1">
                        <div className="flex items-center pl-12 lg:pl-24 p-24">
                            <Hidden lgUp>
                                <IconButton
                                    onClick={(ev) => this.pageLayout.toggleLeftSidebar()}
                                    aria-label="open left sidebar"
                                >
                                    <Icon>menu</Icon>
                                </IconButton>
                            </Hidden>
                            <div className="flex-1"><h4>Header</h4></div>
                        </div>
                    </div>
                }
                contentToolbar={
                    <div className="px-24"><h4>Content Toolbar</h4></div>
                }
                content={
                    <div className="p-24">
                        <h4>Content</h4>
                        <br/>
                        <DemoContent/>
                    </div>
                }
                leftSidebarHeader={
                    <div className="p-24"><h4>Sidebar Header</h4></div>
                }
                leftSidebarContent={
                    <div className="p-24">
                        <h4>Sidebar Content</h4>
                        <br/>
                        <DemoSidebarContent/>
                    </div>
                }
                onRef={instance => {
                    this.pageLayout = instance;
                }}
            />
        )
    };
}

export default withStyles(styles, {withTheme: true})(SimpleLeftSidebarSample);