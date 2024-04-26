<template>
    <Qalendar 
      :events="events"
      :config="config"
    />
</template>

<script>
import { Qalendar } from "qalendar";

export default {
    components: {
        Qalendar,
    },

    data() {
        return {
            events: [
                // ...
                {
                  title: "Ortopedia",
                  with: "Chandler Bing",
                  time: { start: "2024-04-26 12:05", end: "2024-04-26 13:35" },
                  color: "green",
                  isEditable: true,
                  id: "753944708f0f",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!"
                },
                {
                  title: "Traumatologia",
                  with: "Chandler Bing",
                  time: { start: "2024-04-26 14:05", end: "2024-04-26 15:35" },
                  color: "red",
                  isEditable: true,
                  id: "753944708f0f2",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!"
                },
                {
                  title: "Ralph on holiday",
                  with: "Rachel Greene",
                  time: { start: "2022-05-10", end: "2022-05-22" },
                  color: "green",
                  isEditable: true,
                  id: "5602b6f589fc"
                }
                // ...
            ],
            config: {
                style: {
                    colorSchemes: {
                    meetings: {
                        color: '#fff',
                        backgroundColor: '#318da6',
                    },
                    sports: {
                        color: '#fff',
                        backgroundColor: '#ff4081',
                    }
                }
            }
        }
        }
    },
}
</script>

