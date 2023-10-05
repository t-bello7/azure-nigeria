import { List, Avatar } from "antd";
import { schedule } from "../../assets/data";
import SectionHeader from "../molecules/SectionHeader";

function Session() {
  return (
    <div className="container mx-auto max-w-[80%]">
      <SectionHeader heading="What's when" subHeading="conference schedule" />
      {schedule.map((item) => (
        <div className="grid" key={item.id}>
          <div className="w-fit justify-self-center border border-black px-8 py-4">
            <p className="text-center">{item.date}</p>
          </div>
          <div>
            <List
              itemLayout="horizontal"
              dataSource={item.schedule}
              renderItem={(scheduleData) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={scheduleData.img} />}
                    title={(
                      <div>
                        <span className="flex gap-2">
                          <span>
                            {scheduleData.startTime}
                            {' '}
                          </span>
                          {' '}
                          -
                          {" "}
                          <span>
                            {' '}
                            {scheduleData.endTime}
                          </span>
                        </span>
                        <h4>
                          {' '}
                          {scheduleData.title}
                        </h4>
                        <p>
                          {" "}
                          By
                          {' '}
                          {scheduleData.speaker}
                          {' '}
                          {scheduleData.role}
                          {" "}
                          {scheduleData.company}
                        </p>
                      </div>
                    )}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Session;
