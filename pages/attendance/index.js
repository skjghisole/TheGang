import Title from '/components/title'
import Page from '/components/page'
import AttendanceTable from '/components/custom/siegeWarAttendanceTable'
import Grid from '/components/grid'

const title = "Siege War Attendance"

const Attendance = () => (<Page scrollable={true}>
    <Title title={title} />
    <Grid
        scrollable={true}
    >
        <AttendanceTable />
    </Grid>
</Page>)

export default Attendance