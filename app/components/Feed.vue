<template>

    <Page>
        <ActionBar title="Home" />
        <Label row="0" class="header" text="My Tasks" />
        <BottomNavigation>
            <TabStrip>
                <TabStripItem>
                    <Label text="Home"></Label>
                    <!-- <Image src="res://home"></Image> -->
                </TabStripItem>
                <TabStripItem>
                    <Label text="Lift"></Label>
                    <!-- <Image src="res://settings"></Image> -->
                </TabStripItem>
                <TabStripItem>
                    <Label text="Stats"></Label>
                    <!-- <Image src="res://home"></Image> -->
                </TabStripItem>
                <TabStripItem>
                    <Label text="Profile"></Label>
                    <!-- <Image src="res://home"></Image> -->
                </TabStripItem>
            </TabStrip>

            <TabContentItem>
                <Label row="0" class="header" text="My Tasks" />

                <ScrollView orientation="Vertical">
                    <GridLayout class="m-15"
                        rows="auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto">
                        <Label width="0" height="50" class="h3 m-15" row="1"
                            column="1" text="Lance Meurs" />

                        <Label width="60" height="50" class="h3 m-15" row="1"
                            column="1" text="Upper Body Lift" />
                        <Label width="0" height="50" class="h3 m-15" row="2"
                            text="Time:   Total Sets:   Total Volume: " />
                        <Label width="0" height="50" class="h3 m-15" row="3"
                            text="See the highlights..." />
                        <Label width="0" height="50" class="h3 m-15" row="4"
                            text="Sam Marburger" />
                        <Label width="60" height="50" class="h3 m-15" row="5"
                            text="Title 5" />
                        <Label width="60" height="50" class="h3 m-15" row="6"
                            text="Title 6" />
                        <Label width="0" height="50" class="h3 m-15" row="7"
                            text="Caleb Johnston" />
                        <Label width="60" height="50" class="h3 m-15" row="8"
                            text="Title 7" />
                        <Label width="60" height="50" class="h3 m-15" row="9"
                            text="Title 7" />
                        <Label width="60" height="50" class="h3 m-15" row="10"
                            text="Title 7" />
                        <Label width="60" height="50" class="h3 m-15" row="11"
                            text="Title 7" />

                    </GridLayout>
                </ScrollView>
            </TabContentItem>
            <TabContentItem>
                <GridLayout>
                    <Label
                        text="This tab will list completed tasks for tracking."
                        textWrap="true">
                    </Label>
                </GridLayout>
            </TabContentItem>
            <TabContentItem>
                <GridLayout>
                    <Label
                        text="This tab will list active tasks and will let users add new tasks."
                        textWrap="true">
                    </Label>
                </GridLayout>
            </TabContentItem>
            <TabContentItem>
                <GridLayout>
                    <Label
                        text="This tab will list active tasks and will let users add new tasks."
                        textWrap="true">
                    </Label>
                </GridLayout>
            </TabContentItem>
        </BottomNavigation>

    </Page>
</template>
<script>
 
</script>

<style>
</style>