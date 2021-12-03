import {EuiCollapsibleNavGroup, EuiListGroupProps, EuiListGroup, EuiSpacer, EuiButton} from '@elastic/eui';
import React from 'react';

const RecipeMenu: React.FC = () => {

    const avatars = [
        {
            name: 'breakfast',
            imageUrl: '',
            size: 'm'
        }
    ]

    const menuList: EuiListGroupProps['listItems'] = [
        {
          label: 'Breakfast',
          iconType: 'bell',
          size: 's',
        },
        {
          label: 'Lunch',
          iconType: 'bell',
          size: 's',
        },
        {
            label: 'Dinner',
            iconType: 'bell',
            size: 's',
        },
        {
            label: 'Snacks',
            iconType: 'bell',
            size: 's',
        },
        {
            label: 'Desserts',
            iconType: 'bell',
            size: 's',
        },
      ];

    return (
        <>
            <EuiCollapsibleNavGroup title={
                <span>
                    <small style={{ fontWeight: 'normal' }}>Recipes</small> <br />
                    <strong>By Jess</strong>
                </span>
                }
                iconType="logoGCPMono"
                iconSize="xl"
                isCollapsible={true}
                initialIsOpen={false}
                background="dark">
                    <div role="group" className="kibanaNavDeployment__content">
                        <EuiListGroup listItems={menuList} flush />
                        <EuiSpacer size="s" />
                        <EuiButton color="ghost" fullWidth>
                            Add a New Recipe
                        </EuiButton>
                    </div>
            </EuiCollapsibleNavGroup>
        </>
)}

export default RecipeMenu;